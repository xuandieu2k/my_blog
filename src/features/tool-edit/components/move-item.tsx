import { FC, useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { TYPE_CONTENT_COMPONENT } from "../../../base/constants/app-constants";
import { TextTool } from "./text-tool";
import { TextImageTool } from "./text-image-tool";
import ic_remove from '../../../static/svg/ic-remove.svg'
import ContentPost from "../../../base/model/content-post";
import Post from "../../../base/model/post";
import { ChooseTool } from "./choose-tools";
import { Alert, Snackbar } from "@mui/material";
interface MoveItemProps {
    post: Post,
    setPost: (post: Post) => void
}

export const MoveItem: FC<MoveItemProps> = ({ post, setPost }) => {
    const [content, setContent] = useState<string>('')
    const [open, setOpen] = useState<boolean>(false)

    useEffect(() => {
        var childDivs = document.querySelectorAll('div[id^="drag-div-child-"]');
        var text = ''
        console.log({ childDivs });
        childDivs.forEach(function (div) {
            text += `<div>${div.innerHTML}</div>`
        });
        setContent(text ?? '')
    }, [post.content_posts])

    // Hàm xử lý khi kéo thả
    const handleOnDragEnd = (result: DropResult) => {
        if (!result.destination) return; // Nếu không có vị trí đích, kết thúc

        const newItems = Array.from(post.content_posts);
        const [reorderedItem] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, reorderedItem);

        // setCurrentContents(newItems);
        const updatedItems = [...newItems]
        const updatedPost = { ...post, content_posts: updatedItems };
        setPost(updatedPost);
    };

    const onChangeData = (newContentPost: ContentPost, position: number) => {
        const updatedPosts = [...post.content_posts]; // Tạo một bản sao của mảng content_posts
        updatedPosts[position] = newContentPost; // Cập nhật nội dung tại vị trí chỉ định
        const updatedPost = { ...post, content_posts: updatedPosts }; // Tạo một bản sao của đối tượng post và cập nhật mảng content_posts
        setPost(updatedPost); // Cập nhật lại đối tượng post mới
    }

    const renderContent = (item: ContentPost, index: number) => {
        switch (item.type) {
            case TYPE_CONTENT_COMPONENT.TEXT: return (<TextTool contentPost={item} onChangeData={onChangeData} position={index} />)
            case TYPE_CONTENT_COMPONENT.TEXT_IMAGE: return (<TextImageTool contentPost={item} onChangeData={onChangeData} type="text-first" position={index} />)
            case TYPE_CONTENT_COMPONENT.IMAGE_TEXT: return (<TextImageTool contentPost={item} onChangeData={onChangeData} type="image-first" position={index} />)
            default: return (<TextTool contentPost={item} onChangeData={onChangeData} position={index} />)
        }
    }

    const removeView = (item: ContentPost) => {
        const itemIndex = post.content_posts.findIndex((i) => i.id == item.id)
        if (itemIndex !== -1) {
            const updatedItems = [...post.content_posts]
            updatedItems.splice(itemIndex, 1)
            const updatedPost = { ...post, content_posts: updatedItems };
            setPost(updatedPost);
        }
    }

    const onPickup = (type: number) => {
        const updatedItems = [...post.content_posts]
        updatedItems.push(new ContentPost({ id: updatedItems.length + 1, type: type }))
        const updatedPost = { ...post, content_posts: updatedItems }
        setPost(updatedPost)
        if(updatedItems.length > 0){
            setOpen(true)
        }
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div className="container my-2">
            <h6 className="mb-2">(<span className="text-red-500">*</span>) Nội dung bài viết  <span className="text-green-800">({post.content_posts.length})</span></h6>
            <ChooseTool onPickTool={onPickup} />
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} >
                <Alert
                    onClose={handleClose}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    Đã thêm mới bản thiết kế số: <b>{post.content_posts.length}</b>
                </Alert>
            </Snackbar>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="items">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef} className="container">
                            {post.content_posts.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                                    {(provided) => (
                                        <div
                                            id={`drag-div-child-${item.id}`}
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className="item my-4 bg-gray-100"
                                        >
                                            <div className="flex flex-row justify-between items-center my-2 p-2">
                                                <h6 className="mb-1 w-fit">Thiết kế {index + 1}</h6>
                                                <div className="ml-auto flex flex-row justify-between items-center bg-red-300 rounded p-2 " onClick={() => removeView(item)}>
                                                    <img src={ic_remove} className="h-4 w-4" />
                                                    <p className="ml-2 text-whitre">Gỡ bỏ</p>
                                                </div>
                                            </div>
                                            {renderContent(item, index)}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            {/* <p>{content}</p> */}
        </div>
    );
}