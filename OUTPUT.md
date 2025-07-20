## Changes Made

### General Architecture

Since all the components resided in a single file, it has been broken down into multiple files, a file for each component.

### App
   1. 

### Header

   1. Invalid asset URL in line 29
      - Issue: AvatarImage's source is linked to a file that does not exist
      - Fix: Extracted the avatar image from Figma to assets and correctly linked it to AvatarImage

   2. Generic usage of image alt attribute in line 9
      - Issue: The logo used in the header has a generic alt of "Logo"
      - Fix: Changed the alt to a more descriptive alt text of "Wortionary logo"

### BoxArea97

   1. Missing alt attribute for background image in line 11
      - Issue: The background image does not have an alt attribute
      - Fix: Added alt attribute for accessibility in the background image

### TagList

   1. Missing props interface
      - Issue: Component lacks explicit props interface definition
      - Fix: Added TagListProps interface for code readability

### index.html

   1. Icon in line 5
      - Issue: Uses the default vite logo for app when app logo is present
      - Fix: Changed image link to use app logo from public/task1


### Others

   1. New packages
      - Issue: Didn't have any packages to deal with API calls
      - Fix: Added "axios" for http calls, and TanStack Query as utility for managing server state