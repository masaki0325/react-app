interface HeadlineProps {
    title: string;
    page: string;
}

export default function Headline(props: HeadlineProps) {
    console.log(props.title);
    console.log(props.page);
    return (
      <div>
        <p>This is the headline of the {props.title}</p>
        <p>{props.page}</p>
      </div>
    );
  }