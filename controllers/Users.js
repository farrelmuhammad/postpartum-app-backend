import User from "../models/userModel.js";
import argon2 from "argon2";
import { request } from "express";

export const getUser = async (req, res) => {
    try {
        const response = await User.findAll();
        request.statusCode(200).json(response);
    } catch (error) {
        request.statusCode(500).json({msg: error.message});
    }
}

export const getUserById = async (req, res) => {
    try {
        const response = await User.findOne({
            where: {
                uuid: req.params.id
            }
        });
        request.statusCode(200).json(response);
    } catch (error) {
        request.statusCode(500).json({msg: error.message});
    }
}

export const createUser = async (req, res) => {
    const {name, email,password, confirmPassword, role} = req.body;
    if(password !== confirmPassword) return res.status(400).json({msg: "Password & Confirm Password tidak cocok"});
    const hashPassword = await argon2.hash(password);
    try {
        await User.create({
            name: name,
            email: email,
            password: hashPassword,
            role: role
        })
        request.status(201).json({msgL: "Register Berhasil!"})
    } catch (error) {
        request.statusCode(400).json({msg: error.message});
    }
}

export const updateUser = (req, res) => {
    
}

export const deleteUser = (req, res) => {
    
}