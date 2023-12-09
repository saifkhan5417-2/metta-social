# metta-social

## Assumptions

1. **API Response Structure:**
   - The code assumes that the "restcountries" API will consistently return an array of countries with properties such as `cca2`, `altSpellings`, and `capital`. Any changes in the API response structure may impact the functionality.

2. **API Endpoint Construction:**
   - The code assumes that the construction of the API endpoint based on the user-input currency code is accurate. Ensure that the `fetch` call to the "restcountries" API is correctly implemented.

3. **Data Structure Assumption:**
   - The code assumes a specific structure for the response data, including properties like `cca2`, `altSpellings`, and `capital`. Changes in the API response structure could potentially break the functionality.

4. **Alt Text for Flag Images:**
   - The code assumes that the alt text for flag images is available in the `altSpellings` array and uses it for the `alt` attribute. Confirm that this assumption holds true for all countries.

5. **Image Source URL Assumption:**
   - The code assumes that the constructed URL for flag images (`https://flagsapi.com/${country.cca2}/flat/64.png`) will consistently provide valid flag images. Changes in the service or country code format may impact this assumption.

6. **User Input Validation:**
   - The code assumes that the user will input a valid currency code. There is no validation or error handling for invalid inputs, and it assumes that the API will handle invalid currency codes gracefully.
