import StartForm from "../../components/start-form/start-form.component";

import "./starting.styles.css";

const Starting = () => {
    return (
        <div>
            <div className="heading">
                <h1>Quizzical</h1>
                <p>Test your knowledge</p>
            </div>

            <StartForm />
        </div>
    );
};

export default Starting;
