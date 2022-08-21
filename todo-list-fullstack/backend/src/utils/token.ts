// import jwt from 'jsonwebtoken';
// import fs from 'fs';

// const secret = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf-8' }).trim();

// const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };

// export const generateToken = (user: { id: any; email: any; role: any; }) => {
//   const { id, email, role } = user;
//   // delete user.password;
//   const token = jwt.sign({ id, email, role }, secret, jwtConfig);

//   return { token };
// };

// export const verifyToken = (token: any) => jwt.verify(token, secret);
