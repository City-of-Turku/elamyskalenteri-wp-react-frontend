import Link from 'next/link'

const TopPick = ({ props, locale }) => {

    return (
        <div>
            <Link href="#">
                {props.media_item}
            </Link>
        </div>
    )
}

export default TopPick