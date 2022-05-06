import { db } from "../config/admin";

const userDB = db.collection('users'); // Получаем колекцию юзеров
const lawashDB = db.collection('lawash'); // Получаем колекцию lawash :)

export { userDB, lawashDB}