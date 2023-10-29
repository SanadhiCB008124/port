
import image from '../assets/bg.jpg';

function Home() {
    return (
        <div className="relative h-screen grid bg-primary">
            <div className="flex  justify-center items-center flex-auto min-w-0">
                <div
                    className="w-full bg-primary h-full object-fill flex-auto items-center justify-center p-10 overflow-hidden text-white bg-no-repeat bg-cover"
                    style={{
                        backgroundImage: `url(${image})`,
                    }}
                >
                    <div className="container mx-auto flex flex-row justify-end">
                        <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
                            <h1 className="text-3xl md:text-5xl p-2 text-primary-500 tracking-loose">
                                ZenithPay
                            </h1>
                            <h2 className="text-1xl  leading-relaxed md:leading-snug mb-2">
                                Seamless crypto, secure transactions
                            </h2>
                          
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
