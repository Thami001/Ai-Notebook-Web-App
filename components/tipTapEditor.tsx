"use client"

import React from 'react';
import {EditorContent, useEditor} from "@tiptap/react";
import {StarterKit} from "@tiptap/starter-kit"
import TipTapMenuBar from "@/components/tipTapMenuBar";
import {Button} from "@/components/ui/button";


const TipTapEditor = () => {
    const [editorState, setEditorState] = React.useState('')
    const editor = useEditor({
       autofocus: true,
       extensions: [StarterKit],
        content: editorState,
        onUpdate: ({editor}) => {
           setEditorState(editor.getHTML())
        }
    })
    return (
        <>
            <div className={"flex"}>
                {editor && <TipTapMenuBar editor={editor}/>}
                <Button>Saved</Button>
            </div>
            <div className={"prose"}>
                <EditorContent editor={editor}/>
            </div>
        </>
    );
};

export default TipTapEditor;