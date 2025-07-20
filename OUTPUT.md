## Changes Made

### General Architecture

Since all the components resided in a single file, it has been broken down into multiple files, a file for each component.

The components "BoxArea108" and "BoxArea97" had vague names. These have been changed to better fit their purpose.

   BoxArea108 => SearchBarContainer
   BoxArea97 => SearchBar

### Changes throughout all components
   1. Hardcoded colors for UI
      - Issue: Instead of fetching UI colors from the style utility, app uses hardcoded values
      - Fix: UI colors are wired programmatically from UI utils (which also handles light/dark mode toggle)

   2. Props for search functionality
      - Issue: Since the search functionality was centralized inside App component, we didn't have a way to access this in other components
      - Fix: Props needed for changing search input, or handling search are now passed to multiple components that use the search functionality

   3. Change propagation of search inputs
      - Issue: Multiple components can trigger search, but the values of each aren't reflected everywhere
      - Fix: The search text has been centralized in App component, so a text change in one place propagates the text change everywhere. 

### [NEW]: useSearch hook (src/hooks/use-search)
   1. No central place for same search functionality
      - Issue: Even though search is placed in multiple places within the app, the functionality for this is not reused.
      - Fix: Created a useSearch hook that can be used anywhere search functionality is needed (Currently only used in a central App component for other reasons)

### App
   1. Tags without context
      - Issue: Both the "Trending" and "For you" tag components receive a generic tag list
      - Fix: Created dummy tag list in separate files under src/lib/constants and mocked their fetch in App. This way we can simply replace them with real endpoints, when a backend is ready, without affecting their UI behaviors. 

   2. Missing HTML semantics
      - Issue: The two tag list components have no semantic HTML around them
      - Fix: Wrapped tag list components with "section" and a meaningful aria label.

   3. Centralized search missing
      - Issue: Within the same component, multiple components can trigger search and change the search input text
      Fix: Used the useSearch hook, along with defining the search functionality.

   4. Last TagList component sticking to very bottom in some screens
      - Issue: On some screens, there is no space below the TagList component
      - Fix: Added padding to the bottom of the "main" semantic HTML

### Header

   1. Invalid asset URL for user avatar
      - Issue: AvatarImage's source is linked to a file that does not exist
      - Fix: Extracted the avatar image from Figma to assets and correctly linked it to AvatarImage

   2. Generic usage of image alt attribute for logo
      - Issue: The logo used in the header has a generic alt of "Logo"
      - Fix: Changed the alt to a more descriptive alt text of "Wortionary logo"

   3. Unaligned search bar elements
      - Issue: The elements in the search bar are not vertically aligned.
      - Fix: Implemented items-center for a consistent look

   4. Missing border in search input
      - Issue: A lack of clear border in search input makes the input less accessible in light mode
      - Fix: Added a border to the input

### SearchBarContainer

   1. Missing alt attribute for background image
      - Issue: The background image does not have an alt attribute
      - Fix: Added alt attribute for accessibility in the background image

### SearchBar

   1. Searching on every keystroke
      - Issue: The useEffect() previously present called the search function on every keystroke
      - Fix: Search functionality is only limited to when a user clicks on the "Search" button, thereby making possible API calls efficient (Alternatively, we could also consider debouncing the keystroke event, and removing the "Search" button completely)

   2. Pressing enter does nothing
      - Issue: User can navigate to the search bar using the keybaord but cannot actually search anything.
      - Fix: Wrapped the existing SearchBar elements inside a form so the "Submit" button can be triggered using keyboard.

   3. Search input with no aria label
      - Issue: Search input has no aria label thereby decreasing accessibility.
      - Fix: Added an aria-label attribute for the search input.

   4. Decorative search icon
      - Issue: The search icon (Search) is decorative.
      - Fix: Applied aria-hidden attribute to prevent screen readers from announcing it.

   5. Tacky search button
      - Issue: The search button looks a little tacky
      - Fix: Added a border radius to the search button that is consistent with the border radius of the wrapping container

### TagList

   1. Missing props interface
      - Issue: Component lacks explicit props interface definition
      - Fix: Added TagListProps interface for code readability

   2. Tag click does nothing
      - Issue: Clicking on the tags inside the Tag component does nothing in the app
      - Fix: Clicking on a tag now propagates the event to App component, which in turn passes it to SearchBarContainer as well as Header to be displayed in our UI

   3. No accessibility through keyboard for tags
      - Issue: The tags cannot be accessed through keyboard
      - Fix: Wrapped the tags/ badges with a HTML button which provides in-built focus for keyboards. Clicking enter on a tab navigated tag/badge also propagates the click event. 

### index.html

   1. Icon in line 5
      - Issue: Uses the default vite logo for app when app logo is present
      - Fix: Changed image link to use app logo from public/task1

### index.css

   1. Automatic Light/dark mode toggle missing
      - Issue: Even though we have light/dark styles, the app does not automatically reflect it
      - Fix: Implemented the "prefers-color-scheme" media variable to toggle appearance based on system settings (NOTE: The dark class specifier has been commented out, but if we provide a button to toggle light/dark mode in our app, this may be handy again)

### More (Suggestions for future)

   1. For light mode, the general background of the page is the same color as the search text input. To be aligned with the fact that the search input should be the most prominent item in the page, we could have a more "gray" background, with the text input having the most luminous presence. 

   2. Each TagList component should be responsible for fetching their own data, if they call separate endpoints. The fetch logic could be placed inside individual components for "Trending" and "For you" with the TagList component inside each of them. Additionally, to prevent prop-drilling for the search function, the whole thing could also 