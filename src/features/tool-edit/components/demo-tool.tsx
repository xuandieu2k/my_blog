import { FC } from "react";
import { TextTool } from "./text-tool";
import { TextImageTool } from "./text-image-tool";

export const DemoTool: FC<{}> = () => {
    return (
        <div className="flex flex-col">
            <TextImageTool clasName="mb-20 border-2 border-gray-400"/>
            <TextTool />
        </div>
    )
}