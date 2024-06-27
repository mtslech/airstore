import { useNavigate } from "react-router";

const category = [
    {
        image: 'https://www.tokyo-marui.co.jp/common/images/ph_products_01.png',
        name: 'Rifles'
    },
    {
        image: 'https://www.tokyo-marui.co.jp/common/images/ph_products_03.png',
        name: 'Snipers'
    },
    {
        image: 'https://www.tokyo-marui.co.jp/common/images/ph_products_02.png',
        name: 'Pistols'
    }
]

const Category = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex flex-col mt-5">
                <div className="flex overflow-x-scroll lg:justify-center hide-scroll-bar">
                    <div className="flex ">
                        {category.map((item, index) => {
                            return (
                                <div key={index} className="px-3 lg:px-10">
                                    <div onClick={() => navigate(`/category/${item.name}`)} className="w-32 h-32 lg:w-48 lg:h-20 max-w-xs bg-gray-200 transition-all hover:bg-blue-800 cursor-pointer">
                                        <div className="flex justify-center mb-15">
                                            <img src={item.image} alt={item.name} />
                                        </div>
                                    </div>
                                    <h1 className='text-sm lg:text-lg text-center font-medium title-font'>{item.name}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
                .hide-scroll-bar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .hide-scroll-bar::-webkit-scrollbar {
                    display: none;
                }
            ` }} />
        </div>
    );
}

export default Category;
