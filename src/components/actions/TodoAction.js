export const addItem = (data) => {
    return {
        type: "ADD_Item",
        payLoad:{
            id:new Date().getTime().toString(),
            data
        }
    };
};

export const delteItem = (data) => {
    return {
        type: "DELETE_ITEM",
       payLoad:{
           
        data
       } 
    };
};

export const editItem=(data)=>{
    console.log('edit action data',data)
   return {
       type:'EDIT_ITEM',
       payLoad:{
           data
       }
   }
}
