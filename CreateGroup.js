import React, { useState } from "react";
import "./CreateGroup.css";
import logoImage from "../assets/logo.png"; // 로고 이미지 경로



const CreateGroup = () => {
    // 데이터 리스트
    const [dataList, setDataList] = useState([
        { id: 1, username: "John Doe", name: "React Study Group", members: 10, date: "2024-01-01", category: "Study", approved: false },
        { id: 2, username: "Jane Smith", name: "JavaScript Learners", members: 15, date: "2024-01-05", category: "Workshop", approved: false },
        { id: 3, username: "Alice Brown", name: "Python Developers", members: 8, date: "2024-01-10", category: "Networking", approved: true },
    ]);

    const [isModalOpen, setModalOpen] = useState(false);
    const [newGroup, setNewGroup] = useState({
        username: "",
        name: "",
        members: "",
        date: "",
        category: "",
    });

    // 모달창 열기/닫기
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    // 데이터 추가 함수
    const addGroup = () => {
        const newGroupData = {
            ...newGroup,
            id: dataList.length + 1,
            approved: false,
        };
        setDataList([...dataList, newGroupData]);
        setNewGroup({ username: "", name: "", members: "", date: "", category: "" });
        closeModal();
    };

    // 승인 상태 변경 함수
    const toggleApproval = (id) => {
        setDataList((prevList) =>
            prevList.map((item) =>
                item.id === id ? { ...item, approved: !item.approved } : item
            )
        );
    };

    return (
        <div className="CreateGroup">
            <div className="header">
                <div className="logo-and-title">
                    <img src={logoImage} alt="GROUVE Logo" className="logo-image" />
                    <h1 className="create-group-title">모임 게시판</h1>
                </div>
            </div>
            <div className="content">
                <div className="button-container">
                    <button onClick={openModal} className="create-button">
                        모임 생성
                    </button>
                </div>
                <h2>모임 목록</h2>
                <table className="data-table">
                    <thead>
                    <tr>
                        <th style={{ width: "15%" }}>사용자 이름</th>
                        <th style={{ width: "25%" }}>모임명</th>
                        <th style={{ width: "10%" }}>인원</th>
                        <th style={{ width: "15%" }}>등록일</th>
                        <th style={{ width: "15%" }}>카테고리</th>
                        <th style={{ width: "10%" }}>승인</th>
                    </tr>
                    </thead>
                    <tbody>
                    {dataList.map((item) => (
                        <tr key={item.id}>
                            <td>{item.username}</td>
                            <td>{item.name}</td>
                            <td>{item.members}</td>
                            <td>{item.date}</td>
                            <td>{item.category}</td>
                            <td>
                                <button
                                    className={`approval-btn ${item.approved ? "approved" : "pending"}`}
                                    onClick={() => toggleApproval(item.id)}
                                >
                                    {item.approved ? "승인됨" : "대기중"}
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* 모임 생성 모달 */}
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-container">
                        <h2>모임 생성</h2>
                        <input
                            type="text"
                            placeholder="사용자 이름"
                            className="modal-input"
                            value={newGroup.username}
                            onChange={(e) => setNewGroup({ ...newGroup, username: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="모임명"
                            className="modal-input"
                            value={newGroup.name}
                            onChange={(e) => setNewGroup({ ...newGroup, name: e.target.value })}
                        />
                        <input
                            type="number"
                            placeholder="인원"
                            className="modal-input"
                            value={newGroup.members}
                            onChange={(e) => setNewGroup({ ...newGroup, members: e.target.value })}
                        />
                        <input
                            type="date"
                            className="modal-input"
                            value={newGroup.date}
                            onChange={(e) => setNewGroup({ ...newGroup, date: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="카테고리"
                            className="modal-input"
                            value={newGroup.category}
                            onChange={(e) => setNewGroup({ ...newGroup, category: e.target.value })}
                        />
                        <div className="modal-buttons">
                            <button onClick={closeModal} className="modal-close-button">
                                취소
                            </button>
                            <button onClick={addGroup} className="modal-save-button">
                                저장
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CreateGroup;



