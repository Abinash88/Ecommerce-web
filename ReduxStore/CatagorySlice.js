import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    catagory:[],
    search:[],
    pricecatagory:[],
};

export const CatagorySlice = createSlice({
    name:'catagory',
    initialState,
    reducers:{
        Catagory(state, action) {
            const search = (catag, data) => {
                const catagorized = Array.from(data).filter((item) => {
                    if(catag !== '') {
                        return item.catagory.toLowerCase().toString() === catag.toLowerCase().toString();
                    }else {
                        return item
                    }
                });
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
        },
        PriceCatagory(state, action) {
            const PriceSearch = (value, buyersdata) => {
                const lower = value?.toLowerCase()
                const data = buyersdata?.filter((item) => {
                  return item?.name.toLowerCase().includes(lower)
                })
                return data;
            }
          
              state.pricecatagory = PriceSearch(action.payload.value, action.payload.BuyerDatas)
        }

    }
})

export const {Catagory, Search, PriceCatagory} = CatagorySlice.actions
export default CatagorySlice.reducer;
