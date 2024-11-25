import React from "react";
import "./Rules.css";
import logoImage from "../assets/logo.png";
import GroupImage from "../assets/Group 25.png";

const Rule = ({ colorClass, title, items }) => {
    return (
        <div className="rule">
            <div className={`circle ${colorClass}`}></div>
            <h2>{title}</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

const Rules = () => {
    const rules = [
        {
            colorClass: "circle-orange",
            title: "1. 모임 생성 조건",
            items: [
                "- 제공하는 기본 틀에 준수",
                "명확하고 체계적으로 모임 구성",
                "- 필수 정보를 모두 기입",
            ],
        },
        {
            colorClass: "circle-yellow",
            title: "2. 운영자의 역할",
            items: [
                "- 웹사이트는 모임의 생성과정 지원",
                "- 생성된 모임은 게시판에 업로드",
                "- 모임운영은 운영자가 개입 X ",
            ],
        },
        {
            colorClass: "circle-blue",
            title: "3. 모임 승인 및 게시",
            items: [
                "- 모든모임 검토 후 승인",
                "- 규칙을 위반하는 모임은 승인 X",
                "- 건강한 모임 환경 유지",
            ],
        },
    ];

    return (
        <div className="rules">
            <div className="rules-header">
                <h1>
                    <img src={logoImage} alt="GROUVE Logo" className="logo-image"/>
                    <span className="normal-text"> 의 운영 규칙</span>
                </h1>

                <p className="header-description">
                    운영규칙을 준수하지 않을 경우, 이용이 제한될 수 있습니다. 모두가 즐거운 환경을 만들기 위해 규칙을 지켜주세요!
                </p>
            </div>

            {/* 헤더 아래에 이미지 추가 */}
            <div className="rules-image">
                <img src={GroupImage} alt="Group Header" className="group-image"/>
            </div>

            <div className="rules-content">
                <div className="rules-row">
                    {rules.map((rule, index) => (
                        <Rule
                            key={index}
                            colorClass={rule.colorClass}
                            title={rule.title}
                            items={rule.items}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Rules;
