import React, { useState } from "react";
import { Container } from "react-bootstrap";
import PageHeader from "../../components/PageHeader";
import { longContent } from "./Components/LongContent";

import { chunkArray } from "../../utils/arrayUtils";
import ResultDisplay from "./Components/ResultDisplay"
import ActionBar from "./Components/ActionBar";

function Page() {
    const [arrayInput, setArrayInput] = useState("[]");
    const [chunkSize, setChunkSize] = useState(1);
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");

    const handleRun = () => {
        try {
            const parsedArray = JSON.parse(arrayInput);
            const parsedSize = parseInt(chunkSize, 10);
            const chunkedArray = chunkArray(parsedArray, parsedSize);
            setResult(chunkedArray);
            setError("");
        } catch (err) {
            setError(err.message);
            setResult(null);
        }
    };
    return (
        <Container style={{ paddingBottom: "100px" }}>
            <PageHeader title="Ready To Go Code Challenge">
                {longContent.Challenge}
            </PageHeader>
            <div>
                <label>
                    Array (JSON format):
                    <input
                        type="text"
                        value={arrayInput}
                        onChange={(e) => setArrayInput(e.target.value)}
                    />
                </label>
                <label>
                    Chunk Size:
                    <input
                        type="number"
                        value={chunkSize}
                        onChange={(e) => setChunkSize(e.target.value)}
                    />
                </label>
                <button onClick={handleRun}>Run</button>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
            </div>
            <ActionBar/>
            <ResultDisplay/>
        </Container>
    );
}

export default Page;
