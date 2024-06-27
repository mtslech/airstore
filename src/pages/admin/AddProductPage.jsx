import { Timestamp, addDoc, collection } from "firebase/firestore";
import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/FirebaseConfig";
import { useNavigate } from "react-router";

const categoryList = [
    {
        name: 'Rifles'
    },
    {
        name: 'Snipers'
    },
    {
        name: 'Pistols'
    }
]

const AddProductPage = () => {
    const context = useContext(myContext);
    const { setLoading } = context;

    const navigate = useNavigate();

    const [product, setProduct] = useState({
        title: "",
        price: "",
        productImageUrl: "",
        category: "",
        description: "",
        quantity: 1,
        time: Timestamp.now(),
        date: new Date().toLocaleString(
            "en-US",
            {
                month: "short",
                day: "2-digit",
                year: "numeric",
            }
        )
    });


    // Add Product
    const addProductFunction = async () => {
        if (product.title == "" || product.price == "" || product.productImageUrl == "" || product.category == "" || product.description == "") {
            return toast.error("All Fields Are Required")
        }

        setLoading(true);
        try {
            const productRef = collection(fireDB, 'products');
            await addDoc(productRef, product)
            toast.success("Product Has Been Successfully Added");
            navigate('/admin-dashboard')
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
            toast.error("Adding Product Failed");
        }

    }
    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                {/* Login Form  */}
                <div className="login_Form bg-gray-50 px-8 py-6 border border-gray-100 rounded-xl shadow-md">

                    <div className="mb-5">
                        <h2 className='text-center text-2xl font-bold'>
                            Add Product
                        </h2>
                    </div>

                    <div className="mb-3">
                        <input
                            type="text"
                            name="title"
                            value={product.title}
                            onChange={(e) => {
                                setProduct({
                                    ...product,
                                    title: e.target.value
                                })
                            }}
                            placeholder='Title'
                            className='border border-gray-200 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-400'
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="number"
                            name="price"
                            value={product.price}
                            onChange={(e) => {
                                setProduct({
                                    ...product,
                                    price: e.target.value
                                })
                            }}
                            placeholder='Price'
                            className='border border-gray-200 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-400'
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="text"
                            name="productImageUrl"
                            value={product.productImageUrl}
                            onChange={(e) => {
                                setProduct({
                                    ...product,
                                    productImageUrl: e.target.value
                                })
                            }}
                            placeholder='Image Url'
                            className='border border-gray-200 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-400'
                        />
                    </div>

                    {/* Input Four  */}
                    <div className="mb-3">
                        <select
                            value={product.category}
                            onChange={(e) => {
                                setProduct({
                                    ...product,
                                    category: e.target.value
                                })
                            }}
                            className="w-full px-1 py-2 border border-gray-200 rounded-md outline-none">
                            <option disabled>Select Product Category</option>
                            {categoryList.map((value, index) => {
                                const { name } = value
                                return (
                                    <option className=" first-letter:uppercase" key={index} value={name}>{name}</option>
                                )
                            })}
                        </select>
                    </div>

                    {/* Input Five  */}
                    <div className="mb-3">
                        <textarea
                            value={product.description}
                            onChange={(e) => {
                                setProduct({
                                    ...product,
                                    description: e.target.value
                                })
                            }} name="description" placeholder="Description" rows="5" className=" w-full px-2 py-1 border border-gray-200 rounded-md outline-none placeholder-gray-400">

                        </textarea>
                    </div>

                    {/* Add Button  */}
                    <div className="mb-3">
                        <button
                            onClick={addProductFunction}
                            type='button'
                            className='bg-black hover:bg-blue-800 w-full text-white text-center py-2 font-bold rounded-md'
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProductPage;