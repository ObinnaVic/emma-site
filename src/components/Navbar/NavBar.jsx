import cart from "../assets/image/cart.png";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";



const NavBar = () => {

  const { cartCount } = useGlobalContext()
  
  return (
    <div>
      <div className="">
        <nav className="flex items-center justify-around p-[10px] lg:p-[1rem] shadow gap-[1rem]">
          <Link to="/">
            <div>
              <p className="text-[#171717] text-[0.8rem] text-700 lg:text-[1.5rem] ">
                KODE<span className="text-[#f45454]">CAMP</span>
              </p>
            </div>
          </Link>

          <div className=" flex items-center gap-[1rem]">
            <div>
              <button className=" outline-none px-[10px] py-[5px] lg:w-[7rem] lg:h-[3.63rem] border-[1px] border-solid border-[#7a7a7a] rounded-[5px] lg:rounded-[4.7rem] text-[#515151] text-[12px] lg:text-[1rem] bg-white-500 cursor-pointer active:bg-[#f3f3f3]">
                Login
              </button>
            </div>

            <div>
              <button className=" outline-none px-[10px] py-[5px]  lg:w-[7rem] lg:h-[3.63rem] border-[1px] border-solid border-[#7a7a7a] rounded-[5px] lg:rounded-[4.7rem] text-[#515151] text-[12px] lg:text-[1rem] bg-white-500 cursor-pointer active:bg-[#f3f3f3]">
                Register
              </button>
            </div>

            <Link to="/Cart">
              
              <button>
                      <img
                  src={cart}
                  alt="cart"
                  className=" w-[20px] lg:w-[30px] "
                />
              </button>
            </Link>
            <div className=" w-[15px] h-[15px] text-[9px]  lg:w-[20px] lg:h-[20px] flex justify-center  mt-[-10%] ml-[-13%] lg:text-[13px] lg:mt-[-10%] lg:ml-[-8%] text-white text-[14px] bg-red-500 rounded-[11px] ">
              {cartCount}
            </div>
          </div>
        </nav>
      </div>

      <Outlet />
    </div>
  );
};

export default NavBar;
