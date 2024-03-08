import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "이선재",
        comment: "안녕하세요, 선재입니다.",
    },
    {
        name: "유재석",
        comment: "리액트 잘하고싶어요ㅠ",
    },
    {
        name: "김민경",
        comment: "저도 리액트 잘하고싶어요ㅠ",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment)=> {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}
export default CommentList;