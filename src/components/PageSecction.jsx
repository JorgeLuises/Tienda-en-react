export default function  PageSection(props) {
    return (
        <section className="w-full p-4 flex justify-center items-center">
            <div className="w-full max-w-screen-xl">
                {props.children}
            </div>
        </section>
    )
}