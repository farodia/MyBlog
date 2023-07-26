import React, {FC} from "react";
interface RightArrowProps {
    visible:boolean
}

const RightArrow:FC<RightArrowProps> =({visible=true})=>{
    if (!visible){
        return null;
    }
    return (
        <svg width="80" height="81" viewBox="0 0 100 91" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M89.815 45.4917C84.3674 41.1816 79.5202 37.3171 74.643 33.4854C66.656 27.2108 58.5496 21.0806 50.7051 14.6347C47.4345 11.9437 44.6826 8.62129 41.7455 5.53781C40.4846 4.21398 39.3826 2.50952 40.8784 0.913964C42.5383 -0.858149 44.3497 0.25769 45.7353 1.636C60.64 16.466 79.0917 26.6424 95.4666 39.5499C100.292 43.3527 100.921 46.5551 96.8351 51.2597C95.5704 52.7677 94.1975 54.1815 92.7272 55.4898C82.0387 64.6667 71.4198 73.9329 60.5206 82.8538C57.021 85.7181 52.7758 87.6903 48.7859 89.9186C48.1059 90.2986 46.3148 90.145 46.2084 89.8352C45.8146 88.6972 45.3829 87.034 45.9309 86.2097C48.085 82.9674 50.2326 79.5596 53.0679 76.9605C59.9109 70.6886 67.153 64.8531 74.2066 58.8089C78.3547 55.2541 82.443 51.6292 86.574 48.0541C87.4778 47.2731 88.4505 46.5675 89.815 45.4917Z"
                fill="gray"/>
            <path
                d="M50.4346 45.4927C44.987 41.1825 40.1398 37.318 35.2626 33.4863C27.2756 27.2118 19.1692 21.0816 11.3247 14.6357C8.05416 11.9447 5.30221 8.62226 2.3651 5.53879C1.10427 4.21496 0.00225389 2.5105 1.49805 0.91494C3.15793 -0.857172 4.96936 0.258667 6.35488 1.63698C21.2597 16.4669 39.7113 26.6434 56.0863 39.5509C60.9117 43.3537 61.5404 46.556 57.4547 51.2607C56.19 52.7687 54.8172 54.1825 53.3468 55.4908C42.6584 64.6677 32.0394 73.9338 21.1403 82.8548C17.6407 85.719 13.3954 87.6913 9.40551 89.9195C8.72554 90.2996 6.9344 90.146 6.82807 89.8362C6.43427 88.6981 6.00249 87.035 6.55054 86.2107C8.70464 82.9683 10.8522 79.5606 13.6876 76.9615C20.5305 70.6896 27.7726 64.854 34.8263 58.8098C38.9743 55.2551 43.0627 51.6302 47.1936 48.0551C48.0974 47.274 49.0701 46.5685 50.4346 45.4927Z"
                fill="gray"/>
        </svg>
    );
}
export default RightArrow;