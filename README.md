# Debutante Birthday Invitation Website

This project is a React-based website for a debutante's 18th birthday celebration. It features a Gatsby-inspired design and includes various sections to showcase different aspects of the event.

## Features

- Responsive design with a Gatsby-inspired theme
- Navigation bar for easy access to different sections
- Home page with a photo collage
- About section for event details
- Multiple "Eighteen" sections (Roses, Candles, Blue Bills, Treasure)
- RSVP section for guest responses
- Integration with Google Sheets API for dynamic content

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

- `src/Components/`: Contains all React components
  - `EighteenSection/`: Reusable component for "Eighteen" sections
  - `Home/`: Home page component
  - `About/`: About section component
  - `EighteenRoses/`: Eighteen Roses section
  - `EighteenCandles/`: Eighteen Candles section
  - `EighteenBlueBills/`: Eighteen Blue Bills section
  - `EighteenTreasure/`: Eighteen Treasure section
  - `RSVPSection/`: RSVP form component
  - `Nav/`: Navigation bar component
- `src/assets/`: Contains images and other static assets
- `src/App.js`: Main application component
- `src/index.js`: Entry point of the application

## Dependencies

- React
- Material-UI
- Axios (for API requests)
- Emotion (for styled components)

## External Services

This project uses Google Sheets API to fetch dynamic content for the "Eighteen" sections. Ensure you have the correct API endpoint set up in the respective components.

## Customization

To customize the content or styling:

1. Update the text in the respective components
2. Modify the styled components in each section for design changes
3. Replace images in the `src/assets/` directory
4. Update the Google Sheets API endpoint if necessary

## Deployment

Follow the standard React deployment process. You can use services like Netlify, Vercel, or GitHub Pages for easy deployment.

For more information on deployment, check out the [Create React App deployment documentation](https://facebook.github.io/create-react-app/docs/deployment).

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
