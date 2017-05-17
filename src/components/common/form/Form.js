import React from 'react';
import { connect } from "react-redux";
import classnames from 'classnames';
import isEmpty from 'lodash/isEmpty';
import R from 'ramda';

import TextField from "./TextField";
import TextArea from './TextArea';
import ImageField from './ImageField';
import FileField from './FileField';
import MapField from './MapField';
import SingleChoiceField from './SingleChoiceField';
import MultiChoiceField from './MultiChoiceField_';
import BoolField from './BoolField';
import Submit from './Submit';
import {defaultPreviewImage} from "../../../constants/constants";
import {getCSRFToken} from "../../../actions/authActions";

const styles = {
  form: {
    padding: 15,
    backgroundColor: 'white'
  },
  formFields: {
  }
};

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CSRFToken: undefined,
      isLoading: false,
      fields: this.props.fields,
      value: this.getValue(),
      actionLabel: this.props.actionLabel,
      redirectURL: this.props.redirectURL,
      requestAction: this.props.requestAction,
      errors: {}
    };
  }

  componentWillMount() {
    this.props.getCSRFToken().then(
      (success) => {
        console.log('Got CSRFToken from server: ', success)
        this.setState({CSRFToken: success.csrf})
      },
      (error) => {
        console.log('Error: ', error)
      }
    )

    if (!isEmpty(this.props.filter)) {
      this.filterChoices();
    }
  }

  getNewValue = () => {
    return this.props.fields.map((field, index) => {
      if (field.type === 'image') {
        return {[field.name]: '', [`${field.name}PreviewImage`]: defaultPreviewImage}
      } else if (field.type === 'file') {
        return {[field.name]: '', [`${field.name}CurrentValue`]: ''}
      } else if (field.type==='map') {
        return field.fields.map((field_, index) => {return {[field_.field]: ''}}).reduce((x, y) => {return {...x, ...y}})
      } else if (field.type==='multichoice') {
        if (R.contains(field.name, this.props.filter.children)) {
          return {
            [field.name]: [],
            [`${field.name}Choices`]: field.choices.all,
            [`${field.name}InitialChoices`]: field.choices
          };
        }

        return {
          [field.name]: [],
          [`${field.name}Choices`]: field.choices,
          [`${field.name}InitialChoices`]: field.choices
        };
      } else if (field.type==='choice') {
        return {
          [field.name]: '',
          [`${field.name}Choices`]: field.choices
        }
      } else if (field.type==='dateRange') {
        return {
          [field.start.name]: '',
          [field.close.name]: ''
        }
      }

      return {[field.name]: ''}
    }).reduce((x,y) => {
      return {...x, ...y}
    })
  }

  getValue = () => {
    return this.props.fields.map((field, index) => {
      if (field.type === 'image') {
        return {[field.name]: '', [`${field.name}PreviewImage`]: field.value ? field.value : defaultPreviewImage}
      } else if (field.type==='file') {
        return {[field.name]: field.value, [`${field.name}CurrentValue`]: field.value}
      }  else if (field.type==='map') {
        const returnValue = field.fields.map((field_, index) => {return {[field_.name]: field_.value}})
        console.log('logging initial map value: ', returnValue)
      } else if (field.type === 'multichoice') {
        if (R.contains(field.name, this.props.filter.children)) {
          return {
            [field.name]: field.value ? field.value.map((value) => value) : [],
            [`${field.name}Choices`]: field.choices.all,
            [`${field.name}InitialChoices`]: field.choices
          };
        }

        return {
          [field.name]: field.value ? field.value.map((value) => value) : [],
          [`${field.name}Choices`]: field.choices,
          [`${field.name}InitialChoices`]: field.choices
        };
      } else if (field.type==='choice') {
        return {
          [field.name]: field.value,
          [`${field.name}Choices`]: field.choices
        }
      } else if (field.type==='dateRange') {
        return {
          [field.start.name]: field.start.value,
          [field.close.name]: field.close.value
        }
      }

      return {[field.name]: field.value}
    }).reduce((x,y) => {
      return {...x, ...y}
    })
  };

  filterChoices = (actionType="set", changedValues=null) => {
    if (changedValues===null) {
      changedValues = this.state.value[this.props.filter.parent]
    }

    const parent = this.props.filter.parent;
    const children = this.props.filter.children;

    let filteredOptions = {};
    let filteredValues = {};
    children.map((child, index) => {
      filteredOptions[child] = [];
      filteredValues[child] = this.state.value[child];
    });

    if (isEmpty(changedValues) || (this.state.value[`${parent}InitialChoices`]
          .filter(
            (parentChoice, index) => R.contains(String(parentChoice[0]), changedValues) || R.contains(parentChoice[0], changedValues)
          ).length === this.state.value[`${parent}InitialChoices`].length
      )
    ) {
      children.map((child, index) => {
          filteredOptions[child] = [...filteredOptions[child], ...this.state.value[`${child}InitialChoices`]['all']]
        }
      )
    } else if (changedValues.length===1) {
      this.state.value[`${parent}InitialChoices`]
        .map((parentChoice, index) => {
          const parentLabel = parentChoice[1];
          const parentValue = parentChoice[0];
          if (R.contains(String(parentValue), changedValues) || R.contains(parentValue, changedValues)) {
            children.map((child, index) =>
              filteredOptions[child] = [...filteredOptions[child], ...this.state.value[`${child}InitialChoices`][parentLabel]]
            );

            if (actionType==='get') {
              children.map((child, index) =>
                filteredValues[child] = []
              );
            }
          }
        });
    }

    if (actionType==='get') {
      return {
        options: filteredOptions,
        values: filteredValues
      }
    } else {
      let newValue = children.map((child, index) => {
        return {
          [child]: filteredValues[child],
          [`${child}Choices`]: filteredOptions[child]
        }
      }).reduce((x, y) => {return {...x, ...y}});

      this.setState({
        value: {
          ...this.state.value,
          ...newValue
        }
      })
    }
  };

  clearForm = () => {
    if (this.props.update) {
      this.setState({errors: {}, isLoading: false})
    } else {
      this.setState({errors: {}, isLoading: false, value: this.getNewValue()});
    }
  };

  handleSuccess = (message) => {
    this.clearForm();
  };

  handleError = (error) => {
    console.log('logging form error: ', error)
    if (error.response.status === 400) {
      error.response.json().then((error) => {
        this.setState({ errors: error, isLoading: false });
      });
    } else if (error.response.status === 500) {
      this.setState({isLoading: false});
    }
  };

  formData = () => {
    let formData = new FormData();

    formData.append('csrfmiddlewaretoken', this.state.CSRFToken)

    this.state.fields.map((field, index) => {
      if (field.type==='image' || field.type==='file') {
        this.state.value[`${field.name}File`] && formData.append(field.name, this.state.value[`${field.name}File`]);
      } else if (field.type==='multichoice') {
        this.state.value[field.name].map((value, index) => formData.append(field.name, value));
      } else if (field.type==='dateRange') {
        this.state.value[field.start.name] && formData.append(field.start.name, this.state.value[field.start.name])
        this.state.value[field.close.name] && formData.append(field.close.name, this.state.value[field.close.name])
      } else {
        this.state.value[field.name] && formData.append(field.name, this.state.value[field.name]);
      }
    });

    if (!!this.props.parents) {
      this.props.parents.map((parent, index) => {
        formData.append(parent.name, parent.value)
      });
    }

    return formData;
  };

  logFormData = () => {
    const formData = this.formData();
    console.log("-----FORM DATA -----");

    console.log('csrfmiddlewaretoken: ', this.state.CSRFToken)

    this.state.fields.map((field, index) => {
      if (field.type==='image' || field.type==='file') {
        this.state.value[`${field.name}File`] && console.log(`${field.name}: `, formData.get(field.name));
      } else if (field.type==='multichoice') {
        this.state.value[field.name] && console.log(`${field.name}: `, formData.getAll(field.name));
      } else if (field.type==='dateRange') {
        this.state.value[field.start.name] && console.log(`${field.start.name}: `, formData.get(field.start.name))
        this.state.value[field.close.name] && console.log(`${field.close.name}: `, formData.get(field.close.name))
      } else {
        this.state.value[field.name] && console.log(`${field.name}: `, formData.get(field.name));
      }
    });

    if (!!this.props.parents) {
      this.props.parents.map((parent, index) => {
        console.log(`${parent.name}: `, formData.get(parent))
      });
    }

    console.log("--------------------");
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.logFormData();
    this.setState({ errors: {}, isLoading: true });

    if (this.props.update) {
      this.props.requestAction(this.props.id, this.formData(), this.state.CSRFToken).then(
        (success) => {
          this.handleSuccess(`The ${this.props.name} has been successfully updated.`);
          if (this.props.closeModal) {
            this.props.closeModal();
          }
        },
        (error) => {
          this.handleError(error);
        }
      );
    } else {
      this.props.requestAction(this.formData()).then(
        (success) => {
          this.handleSuccess(`The ${this.props.name} has been successfully added.`);
          if (this.props.closeModal===undefined) {
            this.context.router.push(this.props.redirectURL);
          } else {
            this.props.closeModal()
          }
        },
        (error) => {
          this.handleError(error);
        }
      );
    }
  };

  clearField = (name, type='text') => {
    if (type==='file') {
      this.setState({
        value: {
          ...this.state.value, [`${name}File`]: null, [name]: ''
        },
      })
    }
  };

  updateField = (name, value, file=null, type="text") => {
    let currentValue = {
      ...this.state.value
    };

    if (this.props.filter && name===this.props.filter.parent) {
      const filteredChanges = this.filterChoices('get', value);
      this.props.filter.children.map((child, index) => {
        currentValue = {
          ...currentValue,
          [child]: filteredChanges.values[child],
          [`${child}Choices`]: filteredChanges.options[child]
        }
      });
    }

    let errors = Object.assign({}, this.state.errors);
    delete errors[name];

    let error = false;
    let errorMessage = '';

    if (name==='start_date') {
      if (new Date(value) >= new Date(this.state.value.close_date)) {
        error = true
        errorMessage = ["Start date should be less than close date."]
      }
    } else if (name==='close_date') {
      if (new Date(value) <= new Date(this.state.value.start_date)) {
        error = true;
        errorMessage = ["Close date should be greater than start date."];
      }
    }

    if (error) {
      errors[name] = errorMessage
      this.setState({
        errors
      })
    } else {
      if (type==="file") {
        this.setState({
          value: {
            ...currentValue, [`${name}File`]: file, [name]: value
          },
          errors
        })
      } else if (type==="image") {
        let reader = new FileReader();

        reader.onloadend = () => {
          this.setState({
            value: {
              ...currentValue, [`${name}PreviewImage`]: reader.result, [`${name}File`]: file, [name]: value
            },
            errors
          });
        };

        reader.readAsDataURL(file);

        this.setState({
          value: {
            ...currentValue, [`${name}File`]: file, [name]: value
          }
        })
      } else {
        this.setState({
          value: {
            ...currentValue, [name]: value
          },
          errors
        })
      }
    }

  };

  setAddress = (updatedAddress) => {
    this.setState({
      value: {
        ...this.state.value,
        ...updatedAddress
      }
    })
  };

  formFields = () => {
    const { fields, value, errors } = this.state;
    console.log('logging new values: ', this.state.value)
    return (
      <div style={styles.formFields} className="form-fields">

        {
          fields.map((field, index) => {
            const { type, name, label, required } = field;

            if (type==='text') {
              return <TextField
                key={index}
                field={name}
                value={value[name]}
                label={label}
                updateField={this.updateField}
                error={errors[name]}
                required={required}
              />
            } else if (type==='textarea') {
              return <TextArea
                key={index}
                field={name}
                value={value[name]}
                label={label}
                updateField={this.updateField}
                error={errors[name]}
                required={required}
                rows={8}
              />
            } else if (type==='image') {
              return  <ImageField
                key={index}
                field={name}
                value={value[name]}
                previewImage={value[`${name}PreviewImage`]}
                label={label}
                updateField={this.updateField}
                error={errors[name]}
                required={required}
              />
            } else if (type==='file') {
              return <FileField
                key={index}
                field={name}
                value={value[name]}
                initialValue={value[`${name}CurrentValue`]}
                label={label}
                updateField={this.updateField}
                clearField={this.clearField}
                error={errors[name]}
                required={required}
              />
            } else if (type==='multichoice') {
              return  <MultiChoiceField
                key={index}
                field={name}
                value={value[name]}
                choices={value[`${name}Choices`]}
                label={label}
                updateField={this.updateField}
                error={errors[name]}
                required={required}
              />
            } else if (type==='choice') {
              return <SingleChoiceField
                key={index}
                field={name}
                choices={value[`${name}Choices`]}
                value={value[name]}
                label={label}
                updateField={this.updateField}
                error={errors[name]}
                required={required}
              />
            } else if (type==='dateRange') {
              return (
                <div key={index}>
                  <TextField
                    field={field.start.name}
                    value={value[field.start.name]}
                    label={field.start.label}
                    updateField={this.updateField}
                    error={errors[field.start.name]}
                    type="date"
                    required={field.start.required}
                  />

                  <TextField
                    field={field.close.name}
                    value={value[field.close.name]}
                    label={field.close.label}
                    updateField={this.updateField}
                    error={errors[field.close.name]}
                    type="date"
                    required={field.close.required}
                  />
                </div>
              )
            } else if (type==='bool') {
              return   <BoolField
                key={index}
                field={name}
                value={value[name]}
                label={label}
                updateField={this.updateField}
                error={errors[name]}
                required={required}
              />
            } else if (type==='map') {
              return <MapField
                key={index}
                setAddress={this.setAddress}
                value={value}
                errors={errors}
              />
            }
          })
        }

      </div>
    );
  };

  render() {
    return (
      <form
        encType="multipart/form-data"
        onSubmit={this.onSubmit}
        className={classnames('custom-form')}
        style={styles.form}
      >
        {this.formFields()}
        <Submit
          label={this.state.actionLabel}
          isLoading={this.state.isLoading}
          type="success"
        />
      </form>
    );
  }
}

Form.propTypes = {
  fields: React.PropTypes.array.isRequired,
  actionLabel: React.PropTypes.string.isRequired,
  redirectURL: React.PropTypes.string,
  requestAction: React.PropTypes.func.isRequired,
};

Form.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default connect(null, { getCSRFToken })(Form)
