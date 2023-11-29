
note: forked [Neynar's Sample FC app](https://github.com/manan19/example-farcaster-app) and will build out a provider for Farcaster Kit


# Sample Farcaster App

Welcome to the Sample Farcaster App! This README provides steps to get you started with setting up the project.

## Prerequisites

- Make sure you have Node.js and yarn installed on your machine.

## Setup

1. **Install Dependencies**: 
    To ensure that all the required libraries and modules are installed, run:
    ```bash
    yarn install
    ```

2. **Environment Configuration**:
    We use environment variables for various configurations. Start by copying the example environment variables file:
    ```bash
    cp example.env .env
    ```

3. **Update Environment Variables**: 
    Open the `.env` file in your favorite editor and make sure to replace placeholders with the correct values.
    ```bash
    open .env
    ```
    🔔 Notes: 

    - NEYNAR_API_KEY: If you need one, sign up on [https://neynar.com](https://neynar.com)
    - FARCASTER_DEVELOPER_FID: Visit [https://lookup.fid.dev/?fname=YOUR_APP_FNAME](https://lookup.fid.dev/?fname=YOUR_APP_FNAME) to lookup of your FARCASTER_DEVELOPER_FID if needed.
    - FARCASTER_DEVELOPER_MNEMONIC: Make sure the value is within single quotes
    - A farcaster developer account is the same as any farcaster account. You can use your personal account as a farcaster developer account e.g. https://warpcast.com/manan or your company / branded developer account like https://warpcast.com/neynar

4. **Start the App**:
    To start the Sample Farcaster app in development mode, run:
    ```bash
    yarn start
    ```

    Your app should now be running on `localhost:3000` (or a specified port in your `.env`).

## Troubleshooting

- If you run into issues with missing packages, make sure to run `yarn install` again.
- Ensure all environment variables in `.env` are correctly set.

## Feedback

If you have any feedback or run into issues, please reach out to our team or create an issue on the repository.

---

Happy coding! 🚀
