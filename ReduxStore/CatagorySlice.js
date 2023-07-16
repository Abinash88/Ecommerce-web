import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    catagory:[],
    search:[],
};

export const CatagorySlice = createSlice({
    name:'catagory',
    initialState,
    reducers:{
        Catagory(state, action) {
            const search = (catag, data) => {
                console.log(data, catag);
                const catagorized = Array.from(data).filter((item) => {
                    console.log(item.catagory === catag);
                    if(catag !== '') {
                        return item.catagory.toLowerCase().toString() === catag.toLowerCase().toString();
                    }else {
                        return item
                    }
                });
                console.log(catagorized);
                return catagorized;
              };
            
            state.catagory = search(action.payload.catagory, action.payload.Product);
        },
        Search(state, action) {

            const SearchEngine = (value, buyersdata) => {
                const lower = value?.toLowerCase()
                const data = buyersdata?.filter((item) => {
                  return item?.name.toLowerCase().includes(lower)
                })
                return data;
            }
          
              state.search = SearchEngine(action.payload.value, action.payload.BuyerDatas)
        } 

    }
})

export const {Catagory, Search} = CatagorySlice.actions
export default CatagorySlice.reducer;
