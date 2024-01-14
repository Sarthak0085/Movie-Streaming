import { Category } from "../../types/type";
import { Input } from "../Inputs";

const CategoriesModal = ({ setOpen, handleDelete, category,  isLoading }: {
    setOpen: (open: boolean) => void;
    handleDelete?: () => void;
    isLoading: boolean;
    category? : Category
}) => {

    return (
        <div className="w-screen z-90 bg-dry h-screen">
          {/* <div className="w-[90%] h-[300px] md:w-[500px] bg-gray-700 flex-column items-center justify-center"></div> */}
      <div className='inline-block sm:w-4/5 md:w-3/5 lg:w-2/5 w-full p-10 overflow-y-auto h-full bg-main text-white border align-middle border-bordershadow-xl rounded-2xl'>
              <h2 className='text-3xl font-bold'>{category ? "Update" : "Create"} Category</h2>
              <form className='flex flex-col text-left gap-6 mt-6'>
                  <Input 
                      type="text"
                      placeholder={category ? category?.title : "Action"}
                      label="Category Name"
                      bg={false}
                  />
                <div className="w-full md:flex items-center justify-between md:px-12 px-4 py-6 ">
                  <button
                      onClick={() => setOpen(false)}
                      disabled={isLoading}
                      className="bg-gray-400 w-[100px] py-2 text-white border border-border hover:bg-gray200 font-semibold rounded-md text-center uppercase">
                      Cancel
                  </button>
                 <button
                      onClick={()=>setOpen(false)}
                      className='w-full flex-column py-3 font-bold text-lg transitions hover:bg-transparent rounded border-2 border-subMain bg-subMain text-white'>
                      {category ? "Update" : "Add"}
                  </button>
                  </div>
              </form>
          </div>
        </div>
  )
}

export default CategoriesModal