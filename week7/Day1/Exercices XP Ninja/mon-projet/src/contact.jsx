export default function Contact() {
    return (
        <>
            <div className="bg-gray-200 mx-[100px] p-6">
                <h1 className="text-center text-3xl font-bold">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                    <div className="left">
                        <p>Contact us and we will get back to you within 24 hours.</p>
                        <p>Company Name</p>
                        <p>+256 778 800 900</p>
                        <p>company@gmail.com</p>
                    </div>

                    <div >
                        <form className="right">
                            <h3 className="text-xl font-semibold mb-4">Contact</h3>
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full p-4 border border-gray-300 rounded-md mb-5"
                            />
                            <textarea
                                placeholder="Comment"
                                className="w-full p-4 border border-gray-300 rounded-md mb-5 h-[200px]"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full p-4 bg-[#FF4500] text-white rounded-md"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
