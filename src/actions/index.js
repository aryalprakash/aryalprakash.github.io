export default function sortStore(choice) {
    console.log('i am in action');
    if(choice == 'ztoa'){
        return {
            type: 'SORT_BY_ZTOA'
        };
    }
    else{
        return {
            type: 'SORT_BY_ATOZ'
        };
    }

}
