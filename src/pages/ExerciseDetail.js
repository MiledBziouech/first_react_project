import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
import Loader from '../components/Loader';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState(null);
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const fetchExerciseDetail = async () => {
    try {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const data = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(data);
    } catch (error) {
      console.error('Error fetching exercise details:', error);
    }
  };

  const fetchExerciseVideos = async () => {
    try {
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
      const data = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetail.name} exercise`, youtubeOptions);
      setExerciseVideos(data.contents);
    } catch (error) {
      console.error('Error fetching exercise videos:', error);
    }
  };

  const fetchTargetMuscleExercises = async () => {
    try {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const data = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetail.target}`, exerciseOptions);
      setTargetMuscleExercises(data);
    } catch (error) {
      console.error('Error fetching target muscle exercises:', error);
    }
  };

  const fetchEquipmentExercises = async () => {
    try {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const data = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetail.equipment}`, exerciseOptions);
      setEquipmentExercises(data);
    } catch (error) {
      console.error('Error fetching equipment exercises:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchExerciseDetail();
        await fetchExerciseVideos();
        await fetchTargetMuscleExercises();
        await fetchEquipmentExercises();
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (!exerciseDetail) {
    return <div>No Data</div>;
  }

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  );
};

export default ExerciseDetail;
