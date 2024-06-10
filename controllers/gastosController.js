import {
    addGastosQuery,
    getGastosQuery,
    updateGastosQuery,
    deleteGastosQuery,
    recalcularMontoGastos,
  } from "../models/gastosQueries.js";
  import { v4 as uuidv4 } from "uuid";
  
  export const addGasto = async (req, res) => {
    try {
      const id = uuidv4().slice(0, 8);
      const { roommate, descripcion, monto } = req.body;
      console.log(req.body);
      const newGasto = { id, roommate, descripcion, monto };
      console.log(newGasto);
      const results = await addGastosQuery(newGasto);
      recalcularMontoGastos()
      res.status(201).json(results);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const getGastos = async (req, res) => {
    try {
      const results = await getGastosQuery();
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const updateGasto = async (req, res) => {
    try {
      const { id } = req.query;
      const { roommate, descripcion, monto } = req.body;
      const newGasto = { id, roommate, descripcion, monto };
      const results = await updateGastosQuery(newGasto);
  recalcularMontoGastos()
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const deleteGasto = async (req, res) => {
    try {
      const { id } = req.query;
      const results = await deleteGastosQuery(id);
      recalcularMontoGastos()
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };