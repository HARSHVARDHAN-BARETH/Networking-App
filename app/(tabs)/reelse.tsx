import { View, Text, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VideoList from '@/components/APIVideo';

interface ImageData {
  id: number;
  previewURL: string;
  webformatURL: string;
  largeImageURL: string;
  tags: string;
  user: string;
  userImageURL: string;
  views: number;
  likes: number;
}

const Reelse = () => {
  const [images, setImages] = useState<ImageData[]>([]);

  const fetchImages = async () => {
    try {
      const API_KEY = '48395595-82493b77b86ca78abc8e51aa5'; // Your provided API key
      const response = await axios.get(
        // `https://pixabay.com/api/?key=${API_KEY}&q=yellow+flowers&image_type=photo&pretty=true`
        `https://pixabay.com/api/?key=${API_KEY}&q=hd+wallpaper&image_type=photo`
      );
      setImages(response.data.hits); 
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#000', padding: 0 }}>
      <View style={{ width: '90%', flex: 1, alignSelf: 'center' }}>
        <VideoList />
      </View>
    </View>
  );
};

export default Reelse;
