import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { purple } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function card() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#50469D' }} aria-label="user">
            N
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="File Name"
        subheader="June 01, 2023"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/file.jpg"
        alt="File Preview"
      />
      <CardContent>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton aria-label="share">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
