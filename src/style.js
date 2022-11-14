const styles = {
    boxWidth: "lg:max-w-[1280px] w-full",
    paddingY: "sm:py-6 py-4",
    paddingX: "px-4 sm:px-[9rem]",
    padding: "sm:p-10 p-8",

    heading2: " text-4xl font-semibold text-primary ",

    flexStart: "flex justify-center items-start",
};  

export const layout = {
    section: `${styles.boxWidth} ${styles.paddingX} ${styles.paddingY} `,
    sectionCard: `${styles.padding} bg-bgPrimary rounded-lg`,
    itemCard: `p-8 bg-bgPrimary rounded-lg`,
}

export default styles;




