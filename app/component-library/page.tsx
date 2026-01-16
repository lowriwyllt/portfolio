import ButtonAsLink from "../components/Links/ButtonAsLink";

const ComponentsLibraryPage = () => {
  return (
    <div>
      <h1>Components Library</h1>
      <p>This page is for displaying all components in isolation.</p>
      <p>
        Just placing all components in here for now will come back to tidy these
        up
      </p>

      <div>
        <h2>Button As Link</h2>
        <ButtonAsLink href="#" ariaLabel="Button as link">
          Button As Link
        </ButtonAsLink>
      </div>
    </div>
  );
};

export default ComponentsLibraryPage;
