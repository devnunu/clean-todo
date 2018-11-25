import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  StyleSheet,
  View,
  Alert
} from 'react-native';
import Modal from 'react-native-modal';

// style
import color from '../../common/assets/style/color';

interface DeleteModalProps {
  isModalOpen: boolean;
  onPressConfirm: () => void;
  onPressCancel: () => void;
}

const DeleteModal = (props: DeleteModalProps) => {
  return (
    <Modal isVisible={props.isModalOpen}>
      <View style={styles.modalView}>
        <View style={styles.modalNoteView}>
          <Text style={styles.modalNoteText}>
            {'Do you want to delete\nselected todo item?'}
          </Text>
        </View>
        <View style={styles.modalButtonView}>
          <TouchableHighlight
            style={styles.buttonArea}
            onPress={() => {
              props.onPressCancel();
            }}
          >
            <Text style={[styles.buttonText, styles.cancelButtonText]}>
              Cancel
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.buttonArea}
            onPress={() => {
              props.onPressCancel();
            }}
          >
            <Text style={[styles.buttonText, styles.deleteButtonText]}>
              Delete
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: 'white'
  },
  modalButtonView: {
    display: 'flex',
    flexDirection: 'row'
  },
  modalNoteView: {
    paddingHorizontal: 16,
    paddingVertical: 50
  },
  modalNoteText: {
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 30
  },
  buttonArea: {
    flex: 1
  },
  buttonText: {
    color: 'white',
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  cancelButtonText: {
    backgroundColor: color.gray
  },

  deleteButtonText: {
    backgroundColor: 'red'
  }
});

export default DeleteModal;
