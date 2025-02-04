import ProductImageSlider from "../slider/ProductImageSlider.tsx";
import ProductInfoComponent from "./detail/ProductInfoComponent.tsx";
import ProductDescriptionComponent from "./detail/ProductDescriptionComponent.tsx";
import banner from "../../assets/img/차쥐뿔.png";

function CreatorDetailComponent() {
    return (
        <div className="container mx-auto mt-5 pb-10"> {/* 컨테이너에 하단 여백 추가 */}

            {/* 배너 */}
            <div className="relative w-full h-[300px] rounded-xl overflow-hidden mb-5">
                <img
                    src={banner}
                    alt="배너 이미지"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* 상품 이미지 및 정보 섹션 */}
            <div className="flex flex-col lg:flex-row items-stretch gap-2">
                {/* 왼쪽 이미지 슬라이더 */}
                <div className="flex-1 flex justify-center">
                    <ProductImageSlider />
                </div>

                {/* 오른쪽 상품 정보 */}
                <div className="flex-1 flex flex-col justify-center">
                    <ProductInfoComponent />
                </div>
            </div>

            {/* 상세 설명 섹션 */}
            <div className="mt-5 mb-24"> {/* 상세 설명 하단 여백 추가 */}
                <ProductDescriptionComponent />
            </div>
        </div>
    );
}

export default CreatorDetailComponent;
