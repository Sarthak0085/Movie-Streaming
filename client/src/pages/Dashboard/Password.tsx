import { useDispatch, useSelector } from "react-redux";
import { Input } from "../../components/Inputs"
import Sidebar from "./Sidebar"
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ChangePasswordValidation } from "../../components/Validation/UserValidation";
import { InlineError } from "../../components/Notification/Error";
import { changeUserPasswordData } from "../../types/userType";
import { changeUserPasswordAction } from "../../redux/actions/userAction";
import { useEffect } from "react";
import { toast } from "react-toastify";

const ChangePassword = () => {

    const dispatch = useDispatch();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const { isLoading, isSuccess, isError, message } = useSelector((state) => state.changeUserPassword);

    // validate user
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors}
    } = useForm<changeUserPasswordData>({
        resolver: yupResolver(ChangePasswordValidation)
    })

    const onSubmit: SubmitHandler<changeUserPasswordData> = (data: changeUserPasswordData) => {
        console.log(data);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
       //@ts-ignore
        dispatch(changeUserPasswordAction(data));
    }

    useEffect(() => {

        if (isSuccess) {
            console.log(isSuccess);
            console.log(message);
            
            // toast.success("Password Changed Successfully");
            dispatch({ type: "USER_CHANGE_PASSWORD_RESET" });
        }
        if (isError) {
            console.log(isError);
            toast.error(isError);
            dispatch({ type: "USER_CHANGE_PASSWORD_RESET" });
        }
        if (message) {
            toast.success(message);
            reset();
        }

    },[isSuccess,isError,dispatch, message])

  return (
      <Sidebar>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
              <h2 className="text-xl font-bold">Change Password</h2>
              <div className="w-full">
                      <Input 
                      type="password"
                      placeholder="***********"
                      name="oldPassword"
                      register={register("oldPassword")}
                      label="Previous Password"
                      bg={true}
                      />
                      {
                          errors.oldPassword && <InlineError text={errors.oldPassword.message} />
                      }
              </div>
              <div className="w-full">
                      <Input 
                      type="password"
                      placeholder="***********"
                      name="newPassword"
                      register={register("newPassword")}
                      label="New Password"
                      bg={true}
                      />
                      {
                          errors.newPassword && <InlineError text={errors.newPassword.message} />
                      }
              </div>
              <div className="w-full">
                      <Input 
                      type="password"
                      placeholder="***********"
                      name="confirmPassword"
                      register={register("confirmPassword")}
                      label="Confirm Password"
                      bg={true}
                      />
                      {
                          errors.confirmPassword && <InlineError text={errors.confirmPassword.message} />
                      }
              </div>
              <div className="flex justify-end items-center my-4">
                  <button
                      type="submit"
                      disabled={isLoading}
                      className={`bg-main hover:bg-subMain text-white transitions border border-subMain w-full py-3 px-6 sm:w-auto ${isLoading && "cursor-not-allowed"}`}>
                      Change Password
                  </button>
              </div>
          </form>
    </Sidebar>
  )
}

export default ChangePassword