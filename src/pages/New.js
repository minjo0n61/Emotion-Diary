import { useNavigate } from "react-router-dom";

import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";

const New = () => {
    const navigate = useNavigate();
    return (
        <div>
            <MyHeader
                headText={"새 일기쓰기"}
                leftChild={<MyButton text={"< 뒤로가기"} onClick={() => navigate(-1)} />}
            />
            <div>
                <section>
                    <h4>오늘은 언제인가요?</h4>
                </section>
            </div>
        </div>
    );
};

export default New;