interface ImageCardProps {

}
const ImageCard: React.FC<ImageCardProps> = () => {
    return (
        <div className="relative">
            <img className="h-full w-full object-fit rounded-r-xl" style={{height:"calc(100vh - 128px)"}} src={"/image/MaskGroup.png"} alt="" />
            <div className="absolute top-10 left-24">
                <div className="text-2xl openSansBold">
                    Get future fit with the<br></br> mostin-demand skills!
                </div>
                <div className="openSansRegular font-smm pt-2">
                    Experience immersive learnig with PRISM
                </div>
            </div>
        </div>
    )
}
export default ImageCard