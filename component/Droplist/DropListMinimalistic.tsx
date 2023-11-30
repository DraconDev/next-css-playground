type Props = {};

const DropList = (props: Props) => {
    return (
        <div className="relative">
            <div className="absolute bg-red-200  right-0 ">
                <div className=" ">
                    <div className=" w-32 h-12   hover:bg-gray-600">a</div>
                    <div className=" w-32 h-12   hover:bg-gray-600">b</div>
                    <div className=" w-32 h-12   hover:bg-gray-600">c</div>
                </div>
            </div>
        </div>
    );
};

export default DropList;
