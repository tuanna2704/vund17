import { Box, Button, Container, IconButton } from "@mui/material";
import { deleteData, fetchData } from "actions/dataRepoAction";
import { useEffect, useState } from "react";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Header from "components/Header";
import DeleteModal from "components/DeleteModal";
import EditModal from "components/SaveOrEditModal";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import updateForm from "actions/updateForm";

export default function DataTable() {
  const dispatch = useDispatch();
  const rowData = useSelector((state: RootStateOrAny) => state.data);
  useEffect(() => {
    if (!rowData.length) {
      dispatch(fetchData());
    }
  }, []);

  const [showModal, updateShowModal] = useState(false);

  const toggleModal = () => updateShowModal((state) => !state);

  // Delete
  const [showDelModal,setShowDelModal] = useState(false);
  const toggleDelModal = () => setShowDelModal(state=>!state);
  const [delId,setDelId] = useState(null);
  const handleDelete = () => {
    dispatch(deleteData({id:delId}));
    toggleDelModal();
  }

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100, editable: false },
    { field: "name", headerName: "NAME", width: 200, editable: false },
    { field: "description", headerName: "DESCRIPTION", width: 250, editable: false },
    { field: "watchers_count", headerName: "WATCHERS", type: "number", width: 150, editable: false },
    { field: "language", headerName: "LANGUAGE", width: 120, editable: false },
    { field: "open_issues", headerName: "OPEN_ISSUES", type: "number", width: 120, editable: false },
    { field: "private", headerName: "PRIVATE", width: 100, editable: false },
    { 
      field: "action", 
      headerName: "ACTION", 
      width: 110, 
      sortable: false,
      hideable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params: GridRenderCellParams<Date>) => (
        <strong>
          <IconButton
            aria-label="edit"
            color="success"
            onClick={() => {
              dispatch(
                updateForm({
                  id: params.row.id,
                  name: params.row.name,
                  description: params.row.description,
                  watchers: params.row.watchers_count,
                  language: params.row.language,
                  openIssues: params.row.open_issues,
                  private: params.row.private,
                  mode: 'edit',
                })
              );
              toggleModal();
            }}
          >
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete" color="error"
             id="basic-menu"
            onClick={() => {
              setDelId(params.row.id);
              toggleDelModal();
            }}
          >
            <DeleteIcon />
          </IconButton>
        </strong>
      ),
    },
  ];
  return (
    <>  
      <Header />
      <Container maxWidth="lg">
        <EditModal open={showModal} toggle={toggleModal} />
        <DeleteModal open={showDelModal} toggle = {toggleDelModal} handleDelete ={handleDelete}/>
        <Box
          sx={{
            marginTop: 2,
            marginRight: 2,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Button 
            variant="contained" 
            endIcon={<AddCircleIcon />}
            onClick = { ()=>{
              dispatch(updateForm({
                id: '',
                name: '',
                description: '',
                watchers: 0,
                language: '',
                openIssues: 0,
                private: 'false',
                mode: 'add',   
              }));
              toggleModal();
            }}>
            Add
          </Button>
        </Box>
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ height: 371, width: "100%" }}>
            <DataGrid
              rows={rowData}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              disableSelectionOnClick={true} 
            />
          </div>
        </Box>
      </Container>
    </>
  );
}
