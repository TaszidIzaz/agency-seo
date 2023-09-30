async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/AllProject");
    if(!res.ok){
        throw new Error("AllProject Calling Fail");
    }
    return res.json();
}

const AllProject = async () => {
    const data = await getData();

    return (
        <section>
            <div className="skew skew-top mr-for-radius">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
                    <polygon fill="currentColor" points="0 0 10 10 0 10"/>
                </svg>
            </div>
            <div className="skew skew-top ml-for-radius">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
                    <polygon fill="currentColor" points="0 10 10 0 10 10"/>
                </svg>
            </div>
            <div className="py-20 bg-gray-50 radius-for-skewed">
                <div className="container px-4 mx-auto">
                    <div className="mb-16 flex flex-wrap justify-center md:justify-center items-center">
                        <div className="text-center lg:text-center">
                            <span className="text-green-600 font-bold">
                            Dolor sit amet consectutar
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-bold font-heading">
                                Our Projects
                            </h2>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-4 mb-4">

                        {
                            data.map((item,i)=>{
                                return(
                                    <div key={i} className="w-full md:w-1/2 lg:w-1/3 mb-8 px-4">
                                        <div className="bg-white rounded overflow-hidden">
                                        <a target="_blank" href={item['live']}>
                                            <img className="object-cover w-full h-full transition-all duration-1000 transform hover:scale-110 "
                                                 src={item['image']}
                                                 alt=""/>
                                        </a>
                                        <div className="p-6">
                                        <span className="text-gray-400">{item['created_at']}</span>
                                        <h3 className="mb-4 text-2xl font-bold font-heading">
                                        {item['title']}
                                        </h3>
                                        <a
                                        className="flex text-green-600 hover:text-green-700 font-bold"
                                        href="#"
                                        >
                                        <svg
                                            className="mr-3 w-6 h-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                                            clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>View Case Study</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                                )
                            })
                        }




                    </div>

                </div>
            </div>
            <div className="skew skew-bottom mr-for-radius">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
                    <polygon fill="currentColor" points="0 0 10 0 0 10"/>
                </svg>
            </div>
            <div className="skew skew-bottom ml-for-radius">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
                    <polygon fill="currentColor" points="0 0 10 0 10 10"/>
                </svg>
            </div>
        </section>
    );
};

export default AllProject;