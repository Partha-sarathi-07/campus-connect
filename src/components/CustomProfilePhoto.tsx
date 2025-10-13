import { useMemo } from "react";

export default function CustomProfilePhoto({fullname} : {fullname: string}) {
    type profilePhoto = {
        bg: string,
        letter: string
    }

    const colorPalettes: profilePhoto[] = [
        { bg: "#BBF7D0", letter: "#166534" }, // green
        { bg: "#FECACA", letter: "#991B1B" }, // red
        { bg: "#FEF9C3", letter: "#78350F" }, // yellow
        { bg: "#E9D5FF", letter: "#5B21B6" }, // purple
        { bg: "#FBCFE8", letter: "#9D174D" }, // pink
        { bg: "#C7D2FE", letter: "#3730A3" }, // indigo
        { bg: "#FED7AA", letter: "#C2410C" }, // orange
        { bg: "#E0F2FE", letter: "#0369A1" }, // sky
        { bg: "#D9F99D", letter: "#365314" }, // lime
        { bg: "#FFE4E6", letter: "#BE123C" }, // rose
        { bg: "#FFF7ED", letter: "#78350F" }, // amber
        { bg: "#F5F3FF", letter: "#5B21B6" }, // violet
        { bg: "#FEE2E2", letter: "#B91C1C" }, // rose
        { bg: "#FEEBC8", letter: "#C2410C" }, // orange
        { bg: "#E0E7FF", letter: "#3730A3" }, // indigo
        { bg: "#FCE7F3", letter: "#9D174D" }, // pink
        { bg: "#DCFCE7", letter: "#166534" }, // green
        { bg: "#FEF3C7", letter: "#78350F" }, // yellow
        { bg: "#EDE9FE", letter: "#5B21B6" }, // purple
];
    const randomColor = useMemo(
        () =>  Math.floor(Math.random() * colorPalettes.length)
        ,[fullname]
    );
    return(
        <div 
            className="flex justify-center items-center rounded-full bg- font-medium text-4xl px-5 py-3"
            style={{background: colorPalettes[randomColor].bg, color: colorPalettes[randomColor].letter}}
        >
            {fullname.charAt(0)}
        </div>
    )
}