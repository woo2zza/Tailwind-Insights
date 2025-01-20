"use client";

import Pseudo from "@/components/Pseudo_Class";
import OddEven from "@/components/Odd_Even";
import GiantButton from "@/components/giantButton";
import MixtureButton from "@/components/MixtureButton";

export default function Home() {
  const doSomething = () => alert("확인 클릭!");
  const doSomethingElse = () => alert("취소 클릭!");

  return (
    <div className="space-y-4">
      <Pseudo />
      <OddEven />
      <div className="p-6 space-y-6">
        <div className="peer relative border rounded-lg p-4">
          <input type="checkbox" id="child-checkbox" className="peer hidden" />
          <label className="block p-4 bg-gray-100 rounded-lg cursor-pointer peer-checked:bg-blue-100">
            자식 상태에 따라 배경 변경
          </label>
          <p className="absolute top-full mt-2 text-gray-500 peer-checked:text-blue-500">
            체크박스가 선택되었습니다!
          </p>
        </div>
      </div>
      <div className="space-x-4 space-y-4">
        <GiantButton
          title="Primary Button"
          color="primary"
          size="large"
          onClick={() => alert("Primary Clicked!")}
        />
        <GiantButton
          title="Secondary Button"
          color="secondary"
          size="medium"
          onClick={() => alert("Secondary Clicked!")}
        />
        <GiantButton title="Danger Button" color="danger" size="small" />
      </div>
      <div className="animate-fadeIn">
        <MixtureButton>
          <MixtureButton.Icon type="fancy" />
          <div className="animate-slideIn">
            <MixtureButton.Content
              title="안내"
              description="이것은 멋진 내용을 담고 있는 안내입니다."
            />
          </div>
          <div className="animate-scaleUp">
            <MixtureButton.ButtonContainer align="vertical">
              <MixtureButton.Button type="secondary" onClick={doSomethingElse}>
                취소
              </MixtureButton.Button>
              <MixtureButton.Button type="primary" onClick={doSomething}>
                확인
              </MixtureButton.Button>
            </MixtureButton.ButtonContainer>
          </div>
        </MixtureButton>
      </div>
      <div className="animate-fadeIn">
        <MixtureButton>
          <MixtureButton.Icon type="simple" />
          <MixtureButton.Content
            title="조합기반 컴포넌트"
            description="조합기반 컴포넌트 연습하기"
          ></MixtureButton.Content>
          연습하기
        </MixtureButton>
      </div>
    </div>
  );
}
