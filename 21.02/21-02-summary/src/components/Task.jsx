import {Button, Card, CardContent, TextField, Typography} from "@mui/material";
import {connect} from "react-redux";
import {moveTask, updateTask} from "../redux/actions";
import {useState} from "react";

function Task({task, moveTask, updateTask, status}) {
    function handleDrop(e) {
        const taskId = e.dataTransfer.getData("taskId");

        e.preventDefault();
        e.stopPropagation();
        moveTask(taskId, status);
    }

    const [isEditting, setIsEditting] = useState(false);
    const [newText, setNewText] = useState(task.text);

    function handleUpdate() {
        setIsEditting(true);
    }

    function handleSave() {
        setIsEditting(false);
        updateTask(task.id, newText);
    }
    function handleCancel() {
        setIsEditting(false);
        setNewText(task.text)
    }
    return (
        <Card draggable onDragStart={(e) => e.dataTransfer.setData("taskId", task.id)} onDrop={handleDrop}>
            <CardContent>
                {isEditting ? (
                    <>
                        <TextField value={newText} type="text" onChange={(e) => setNewText(e.target.value)} />
                        <Button onClick={handleSave}>Save</Button>
                        <Button onClick={handleCancel}>Cancel</Button>


                    </>
                ) : (
                    <>
                        {" "}
                        <Typography>{task.text}</Typography>{" "}
                        <Button variant="contained" onClick={handleUpdate}>
                            Update
                        </Button>
                        
                    </>
                )}
            </CardContent>
        </Card>
    );
}
const mapDispatchToProps = {updateTask, moveTask};
export default connect(null, mapDispatchToProps)(Task);
