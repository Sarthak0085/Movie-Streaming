/* eslint-disable @typescript-eslint/no-explicit-any */
import Sidebar from './../Sidebar'
import { CategoriesData } from '../../../data'
import { FaCirclePlus } from "react-icons/fa6";
import Table2 from '../../../components/Table2';
import { AiFillDelete } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import CategoryModal from '../../../components/Modals/CategoryModal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCategoryAction, getAllCategoriesAction, updateCategoryAction } from '../../../redux/actions/categoryAction';
import Loader from '../../../components/Notification/Loader';
import Empty from '../../../components/Notification/Empty';
import CategoriesModal from '../../../components/Modals/CategoriesModal';
import { toast } from 'react-toastify';

const Categories = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [category, setCategory] = useState(null);

    const dispatch = useDispatch();
    const {categories, isLoading} = useSelector((state: any)=>state.getAllCategories) 
    const { isError, isSuccess, message } = useSelector((state: any) => state.adminDeleteCategory);

    const onDeleteHandler = (id: string) => {
        if (window.confirm("Are you sure you want to delete")) {
            dispatch(deleteCategoryAction(id));
        }

    }

    const onEditFunction = (id:string) => {
        setCategory(id);
        setModalOpen(!modalOpen);
    }

    useEffect(() => {
        if (modalOpen === false) {
            setCategory(null);
        }
        if (isSuccess) {
            toast.success(message);
            dispatch({type: "DELETE_CATEGORY_RESET"})
        }

        if (isError) {
            toast.error(isError);
            dispatch({type: "DELETE_CATEGORY_RESET"})
        }
    },[modalOpen, dispatch, isError, isSuccess, message])

  return (
      <Sidebar>
          {/* <CategoriesModal setOpen={setModalOpen} category={category} isLoading={false} /> */}
          <CategoryModal modalOpen={modalOpen} setModalOpen={setModalOpen} category={category} />
          <div className="flex flex-col gap-6">
              <div className="flex-btn gap-2">
                  <h2 className="text-xl font-bold">Categories</h2>
                  <button
                      onClick={()=>setModalOpen(true)}
                      className="bg-subMain flex-rows gap-4 font-medium hover:bg-main text-white transitions rounded-md border border-subMain w-full py-3 px-6 sm:w-auto">
                      <FaCirclePlus size={18} /> Create
                  </button>
              </div>
              {
                  isLoading ?
                      <Loader />
                      : categories && categories.length>0 ?
                        <Table2 data={categories} Icon={AiFillDelete} admin={true} onEditFunction={onEditFunction} onDeleteFunction={onDeleteHandler} />
                      : <Empty message="You haven't created any category yet." />
              }
              
          </div>
      </Sidebar>
  )
}

export default Categories;