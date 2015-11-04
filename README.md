# @inkdpixels/commit-analyzer
[![Build Status](https://travis-ci.org/inkdpixels/commit-analyzer.svg)](https://travis-ci.org/inkdpixels/commit-analyzer) [![Dependency Status](https://david-dm.org/inkdpixels/commit-analyzer.svg)](https://david-dm.org/inkdpixels/commit-analyzer) [![devDependency Status](https://david-dm.org/inkdpixels/commit-analyzer/dev-status.svg)](https://david-dm.org/inkdpixels/commit-analyzer#info=devDependencies) [![Code Climate](https://codeclimate.com/github/inkdpixels/commit-analyzer/badges/gpa.svg)](https://codeclimate.com/github/inkdpixels/commit-analyzer) [![Test Coverage](https://codeclimate.com/github/inkdpixels/commit-analyzer/badges/coverage.svg)](https://codeclimate.com/github/inkdpixels/commit-analyzer/coverage)

> A commit-analyzer plugin for semantic-release which uses the commit guidelines of TYPO3 CMS.

## Installation
```js
npm i -D @inkdpixels/commit-analyzer
```

## Setup & Configuration
Specify the custom commit-analyzer plugin in your projects `package.json`.

```js
{
  "release": {
    "analyzeCommits": "@inkdpixels/commit-analyzer"
	}
}
```

## Contributing
We use xo to lint the code, please take care to run `npm test` before you commit something.
If you add or modify methods or the API, please add unit tests as specified in the `*.spec.js` files.

## License
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
