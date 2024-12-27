// ES Modules style (if using `type: "module"` in `package.json`)
import Dotenv from 'dotenv-webpack';

export default {
  plugins: [
    new Dotenv()
  ]
};
