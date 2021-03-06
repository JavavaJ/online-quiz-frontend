import React, {useState} from 'react';
import ParseQuestions from "../components/ParseQuestions";
import TestQComponent from "../components/TestQComponent";

const Assignments = props => {

    const [quizzes, setQuizzes] = useState("");
    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep(step + 1);
    }

    switch (step) {
        case 1:
            return <ParseQuestions nextStep={nextStep} quizzes={quizzes} setQuizzes={setQuizzes} />
        case 2:
            return <TestQComponent quizzes={quizzes} />
        default:
            return null;
    }
}

export default Assignments;