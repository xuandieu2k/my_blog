import { FC, useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { TYPE_CONTENT_COMPONENT } from "../../../base/constants/app-constants";
import { TextTool } from "./text-tool";
import { TextImageTool } from "./text-image-tool";
import ic_remove from '../../../static/svg/ic-remove.svg'
// Định nghĩa kiểu cho Item
interface Item {
    id: number;
    content: string;
    type?: number;
}

export const MoveItem: FC<{}> = () => {
    const [content, setContent] = useState<string>('')
    // State chứa danh sách các thẻ
    const [items, setItems] = useState<Item[]>([
        { id: 1, content: '1', type: 1 },
        { id: 2, content: '2', type: 2 },
        { id: 3, content: '3', type: 3 },
        { id: 4, content: '4', type: 2 },
        { id: 5, content: '5', type: 3 },
    ]);


    useEffect(() => {
        var childDivs = document.querySelectorAll('div[id^="drag-div-child-"]');
        var text = ''
        console.log({ childDivs });
        childDivs.forEach(function (div) {
            text += `<div>${div.innerHTML}</div>`
        });
        setContent(text ?? '')
    }, [items])

    // Hàm xử lý khi kéo thả
    const handleOnDragEnd = (result: DropResult) => {
        if (!result.destination) return; // Nếu không có vị trí đích, kết thúc

        const newItems = Array.from(items);
        const [reorderedItem] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, reorderedItem);

        setItems(newItems);
    };

    const renderContent = (item: Item) => {
        switch (item.type) {
            case TYPE_CONTENT_COMPONENT.TEXT: return (<TextTool />)
            case TYPE_CONTENT_COMPONENT.TEXT_IMAGE: return (<TextImageTool type="text-first" />)
            case TYPE_CONTENT_COMPONENT.IMAGE_TEXT: return (<TextImageTool type="image-first" />)
            default: return (<TextTool />)
        }
    }

    const removeView = (item: Item) => {
        console.log('Next: ' + items.length)
        const itemIndex = items.findIndex((i) => i.id == item.id)
        if (itemIndex !== -1) {
            const updatedItems = [...items]
            updatedItems.splice(itemIndex, 1)
            setItems(updatedItems)
        }
    }

    return (
        <div className="container my-2">
            <h6 className="mb-2">(<span className="text-red-500">*</span>) Nội dung bài viết  <span className="text-green-800">({items.length})</span></h6>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="items">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef} className="container">
                            {items.map((item, index) => (
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
                                                <h6 className="mb-1 w-fit">Nội dung {index + 1}</h6>
                                                <div className="ml-auto flex flex-row justify-between items-center bg-red-300 rounded p-2 " onClick={() => removeView(item)}>
                                                    <img src={ic_remove} className="h-4 w-4" />
                                                    <p className="ml-2 text-whitre">Gỡ bỏ</p>
                                                </div>
                                            </div>
                                            {renderContent(item)}
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